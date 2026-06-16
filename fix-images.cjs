const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find all src="..." matches
    const regex = /src=['"](\.\.\/\.\.\/assets\/[^'"]+)['"]/g;
    let match;
    let imports = [];
    let importMap = new Map();
    let counter = 1;

    let newContent = content;

    while ((match = regex.exec(content)) !== null) {
        let fullPath = match[1];
        if (!importMap.has(fullPath)) {
            // Generate variable name based on filename
            let baseName = path.basename(fullPath, path.extname(fullPath));
            baseName = baseName.replace(/[^a-zA-Z0-9]/g, '');
            if (/^\d/.test(baseName)) baseName = 'img' + baseName;
            if (baseName === '') baseName = 'img';
            
            let varName = baseName + '_' + counter++;
            importMap.set(fullPath, varName);
            imports.push(`import ${varName} from '${fullPath}';`);
        }
    }

    if (imports.length > 0) {
        // Replace src="..." with src={varName}
        for (let [fullPath, varName] of importMap.entries()) {
            // escape fullPath for regex
            let escapedPath = fullPath.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            let replaceRegex = new RegExp(`src=['"]${escapedPath}['"]`, 'g');
            newContent = newContent.replace(replaceRegex, `src={${varName}}`);
        }

        // Add imports after the last existing import, or at the top
        const importLines = imports.join('\n');
        
        let lastImportIndex = newContent.lastIndexOf('import ');
        if (lastImportIndex !== -1) {
            let endOfLastImport = newContent.indexOf('\n', lastImportIndex);
            newContent = newContent.slice(0, endOfLastImport + 1) + importLines + '\n' + newContent.slice(endOfLastImport + 1);
        } else {
            newContent = importLines + '\n\n' + newContent;
        }

        fs.writeFileSync(filePath, newContent);
        console.log('Fixed:', filePath);
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

walk(path.join(__dirname, 'src', 'components'));
