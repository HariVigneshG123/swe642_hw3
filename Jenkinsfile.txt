pipeline{
    agent any
    environment{
        registryCredential = 'dockercred'
        registry = 'achudan/studentangular'
    }
    tools {nodejs "71Node"}
    stages {
        stage('INSTALL PACKAGES') {
            steps {
                bat "npm install"
            }
        }
        stage('BUILD APP') {
            steps {
                bat "node_modules/.bin/ng build --prod"
            }
        }
        stage("BUILD DOCKER") {
            steps {
                script {
                    dockerImageBuild = docker.build registry + ":latest"
                }
            }
        }
        stage("DEPLOY DOCKER") {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImageBuild.push()
                    }
                }
            }
        }
        stage("DOCKER RUN") {
            steps {
                bat 'docker run -p4200:80 hvignesh/swe642_hw3:latest'
            }
        }
    }
    
}