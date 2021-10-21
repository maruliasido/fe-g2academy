import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const configFirebase = {
    apiKey: "AIzaSyCyg-gboi0KpPpf7igIwkBZEnOdq08OZL8",
    authDomain: "frontend-g2academy.firebaseapp.com",
    projectId: "frontend-g2academy",
    storageBucket: "frontend-g2academy.appspot.com"
}

class Firebase {
    constructor() {
        initializeApp(configFirebase)
        this.auth = getAuth()
    }
    createUser = obj => {
        return createUserWithEmailAndPassword(
            this.auth, obj.email, obj.password
        )
    }
}

export default Firebase