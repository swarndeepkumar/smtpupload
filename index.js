var Sftp = require('sftp-upload');

    var sftpCon = {
        host:'106.66.0.3',
        username:'genband1',
        path: './imagefolder',  // imagefolder directory exist on local that included the files which we want to upload on remote server. All files included in this directory will be uploaded to remote server.
        remoteDir: '/uploadedfolder', // This directoty will be created on remote server if not exist and then will uploaded the files here from local(imagefolder) directory.   
       // privateKey: fs.readFileSync('./id_rsa')
       password: 'genband123'
          
    },


    sftp = new Sftp(sftpCon);
    
    sftp.on('error', function(err){
        throw err;
    })
    //pgs is the current file local path
    .on('uploading', function(pgs){
        console.log('Uploading', pgs.file);
        console.log(pgs.percent+'% completed');
    })
    .on('completed', function(){
        console.log('Upload Completed');
    })
    .upload();
    