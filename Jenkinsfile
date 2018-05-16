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
      stage('test') {
          steps {
              sh 'yarn run test'
          }
      }
      stage('Deploy for development') {
        when {
            branch 'dev'
        }
        steps {
            echo 'Deploy for development'
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
