module.exports = function() {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();
    
        if (cmd === 'pwd') {
            // process.stdout.write(__dirname);
            process.stdout.write(process.cwd());
        } 
        process.stdout.write('\nYou typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    });
}
