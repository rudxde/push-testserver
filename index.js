// @ts-check
const { exec, spawn } = require('child_process');

/**
 * @param {string} branchName
 * @returns {string}
 */
function getTestBranchName(branchName) {
    const matching = branchName.match(/^(\w+)(\/.*)$/);
    if (!matching) {
        throw new Error(`The branch name did not match the expected format!`);
    }
    const [_, type, branchSuffix] = matching;
    console.log(branchSuffix);
    return `test${branchSuffix}`;
}

/**
 * @param {string} localBranch
 * @param {string} testBranch
 * @param {boolean} forcePush
 */
function pushTestBranch(localBranch, testBranch, forcePush) {
    spawn(
        'git',
        [
            'push',
            ...(forcePush ? ['-f'] : []),
            'origin',
            `${localBranch}:${testBranch}`
        ],
        {
            stdio: "inherit"
        }
    );
}

/**
 * @param {boolean} forcePush
 */
function main(forcePush) {
    exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
        if (err) {
            console.error(err, stderr);
            return;
        }
        const branchName = stdout.trim();
        console.log(`current branch is: ${branchName}`);
        const testBranchName = getTestBranchName(branchName);
        pushTestBranch(branchName, testBranchName, forcePush);
    });
}

exports.main = main;