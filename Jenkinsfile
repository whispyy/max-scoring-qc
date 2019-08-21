pipeline {
  agent any

  stages {
    stage('Clone Sources') {
      steps {
        git 'https://github.com/whispyy/max-scoring-qc.git'
      }
    }
    stage('Information') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }    
    stage('Run') {
      parallel {
        stage('Lint') {
          steps {
            sh 'npm run lint'
          }
        }
        stage('Build') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }
  }
}
