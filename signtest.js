(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyAsq2FT_7zQ4iyY5evm_5Tu28KzbrQvG_I",
        authDomain: "test-1-5626c.firebaseapp.com",
        projectId: "test-1-5626c",
        storageBucket: "test-1-5626c.appspot.com",
        messagingSenderId: "25172260807",
        appId: "1:25172260807:web:5713c73dfbbba482e60be2",
        measurementId: "G-8GTWJEXNVM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var u_email = document.getElementById("u_email");
    var u_password = document.getElementById("u_password");
    var btnLogin = document.getElementById("loginbtn");
    var btnSignUp = document.getElementById("signupbtn");
    var btnLogout = document.getElementById("signoutbtn");

    btnLogin.addEventListener('click', e => {
        const email = u_email.value;
        const pass = u_password.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    btnSignUp.addEventListener('click', e => {
        const email = u_email.value;
        const pass = u_password.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function() {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('Not Logged In');
            btnLogout.classList.add('hide');
        }
    })

}());