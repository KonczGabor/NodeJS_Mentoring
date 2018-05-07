'use strict';
const EventEmitter = require('events');
const fs = require('fs');

export class DirWatcher extends EventEmitter {
    constructor() {
        super();
        this.oldFiles = [];
    }
    watch(path, delay) {
        this.interval = setInterval(
            () => {
                fs.readdir(path, (err, files) => {
                
                    for (let i = 0; i < files.length; i++) {
                        if (files[i] !== this.oldFiles[i]) {
                            this.emit('changed', path + files[i]);
                        }
                    }
                    this.oldFiles = files;
                });
            }, delay);
    }

}









