pipeline {
    agent any
    triggers {
           pollSCM '* * * * *'
    }
    stages {

      stage('checkout') {
           steps {
                checkout scm
           }
      }
      stage('install') {
          steps {
              sh 'yarn install'
          }
      }
      stage('Deploy for beta testing') {
        when {
            branch 'master'
        }
        steps {
            sh './build-android.sh'
        }
      }
      stage('Deploy for production') {
        when {
            branch 'master'
        }
        steps {
            echo 'Deploy for production'
        }
      }

    }
}
