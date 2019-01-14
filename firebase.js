var config = {
    apiKey: "AIzaSyCjw5zPZM2qF7kd4PUPXND_DIZwi789jb8",
    authDomain: "doc-upload-8c9d0.firebaseapp.com",
    databaseURL: "https://doc-upload-8c9d0.firebaseio.com",
    projectId: "doc-upload-8c9d0",
    storageBucket: "doc-upload-8c9d0.appspot.com",
    messagingSenderId: "538953570546"
};

firebase.initializeApp(config);

$('#fileUpload').submit(() => {
    const ref = firebase.storage().ref();
    const file = $('input[type="file"]').get(0).files[0];
    const name = (new Date()).getTime() + '-' + file.name;
    const metadata = {
        contentType: file.type
    };
    ref.child(name).put(file, metadata);
    $('#form').empty().html('<p>Thanks!</p>');
    return false;
});
