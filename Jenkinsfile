pipeline{
    agent any
    environment{
        registryCredential = 'dockercred'
        registry = 'hvignesh/swe642_hw3'
    }
    tools {nodejs "71Node"}
    stages {
        stage('INSTALL PACKAGES') {
            steps {
                sh "npm install"
            }
        }
        stage('BUILD APP') {
            steps {
                sh "node_modules/.bin/ng build --prod"
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
                sh 'docker run -p4200:80 hvignesh/swe642_hw3:latest'
            }
        }
    }
    
}