name: Node.js CI

on:
  push:
    branches: [ main ]  # Jab main branch me push ho to run ho

jobs:
  build:
    runs-on: ubuntu-latest  # Virtual machine jisme steps chalenge

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'  # Tumhare project ka version

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test

