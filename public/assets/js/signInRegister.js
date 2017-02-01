	// Initialize Firebase
	var config = {
	    apiKey: "AIzaSyCWKRtae23wddHD89tw6nghlVdfxp6i7dU",
	    authDomain: "menugram-7da5c.firebaseapp.com",
	    databaseURL: "https://menugram-7da5c.firebaseio.com",
	    storageBucket: "menugram-7da5c.appspot.com",
	    messagingSenderId: "475827934505"
	};
	firebase.initializeApp(config);


	// getting random pictures and menu


	$(document).ready(function() {


	    $(document).on("click", "#register_button", registerUser);


	    $(document).on("click", "#login_button", loginUser);


	    $("#sign-in").on("click", showModalSignRegister);


	    function showModalSignRegister() {
	        $("#mModal").modal("show");
	        console.log('wa');
	        return false;
	    }


	    $('.message a').click(function() {
	        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
	    });

	    function toggleModal(argument) {
	        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
	        // body... 
	    }



	    checkUserSigned();

	    //user sign in
	    function checkUserSigned(argument) {
	        // body... 

	        firebase.auth().onAuthStateChanged(function(user) {


	            $("#sign-in").empty();

	            if (user) {

	                isLogin = true;
	                $("#sign-in").html("");
	                $("#sign-in").html('<a href="#">' + user.displayName + '</a>');
                  $("#register").empty();

	            } else {

	                isLogin = false;
	                $("#sign-in").html("");
	                $("#sign-in").html('<a href="#">Sign In</a>');
	                $("#register").html('<a href="#">Register</a>');
	                //$("#registerbutton").on("click", registerModal);

	            }

	            //  userLoginOrNot();


	        });



	    }




	    function loginUser(argument) {
	        // body... 
	        var email = $("#login_email").val();
	        var password = $("#login_password").val();
	        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error, data) {

	            // Handle Errors here.
	            var errorCode = error.code;
	            var errorMessage = error.message;

	            if (errorCode === "auth/wrong-password") {
	                $("#nopassword").empty();
	                $(".form").prepend("<div id='nopassword'><span style= 'color: red'>Wrong email or password </span></div>");
	                console.log("wa");
	            } else {


	                $("#login_email").val("");
	                $("#login_password").val("");
	                $("#nopassword").empty();
	                $("#mModal").modal("toggle");

	                console.log("Login");
	            }

	        });


	        return false;
	    }

	    function registerUser(argument) {


	        var email = $("#register_email").val();
	        var password = $("#register_password").val();
	        var displayName = $("#register_name").val();
	        var last = $("#last_name").val();
	        var first = $("#first_name").val();

	        firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {


	            var user = firebase.auth().currentUser;
	            if (user !== null) {
	                user.updateProfile({
	                    displayName: displayName
	                }).then(function() {
	                    console.log("Update successful.");

	                    /* database.ref("users/"+email.replace(".","-")).set({
          email:email,
          displayName:displayName,
          lastName:last,
          firstName:first

        });
*/

	                }, function(error) {
	                    // An error happened.
	                })
	            }
	        })


	        .catch(function(error) {

	            // Handle Errors here.
	            var errorCode = error.code;
	            var errorMessage = error.message;
	            console.log(error.code + ": " + error.message);

	            console.log(authData);
	        });


	        return false;
	    }

	    function sign_out() {

	        firebase.auth().signOut().then(function() {

	            // Sign-out successful.
	            console.log("Signed out");

	            checkUserSigned();

	        });

	    }













	});