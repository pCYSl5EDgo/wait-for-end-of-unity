import * as fs from 'fs';
import * as path from 'path';
import * as core from '@actions/core';

function sleep(timeMS: number) {
    return new Promise((ok, ng) => {
        setTimeout(() => {
            ok();
        }, timeMS)
    })
}

async function Run() {
    var folder = core.getInput("project-path", { required: true });
    var lockPath = path.join(folder, "Temp/UnityLockfile");
    while (true) {
        try {
            fs.statSync(lockPath);
            await sleep(1000);
            continue;
        } catch{
            return;
        }
    }
}

Run();