# MedLife+ - Personalized Health Recommendation System 

This is a website called MedLife+, designed to empower users with insights and recommendations tailored to their health needs. The app is built using Flask, a Python web framework, and utilizes machine learning algorithms to predict potential diseases based on the user-input symptoms, also providing personalized medical advice, including medication, workout routines, dietary suggestions, and precautions. 

## Features
-> User-Friendly Interface: Effortlessly input your symptoms through our intuitive and easy-to-navigate interface.

-> Advanced Machine Learning Models: Leveraging sophisticated machine learning algorithms, our system delivers highly accurate disease predictions based on the symptoms provided.

-> Tailored Recommendations: Receive personalized suggestions for the top 5 medicines, detailed prescription advice, recommended workouts, dietary guidelines, and necessary precautions to manage the predicted disease effectively.

-> Flask: The system is built on the Flask web framework, offering users the flexibility to access the platform from any location.

## Project Structure

The project has the following structure:

- `static/`: This directory contains static files such as CSS stylesheets and JavaScript files.
- `templates/`: This directory contains the HTML templates used by the Flask app for rendering the web pages.
- `datasets/` : This directory contains all the dataset files used for prediction.
- `models/`: This directory contains Jupyter Notebook file containing the code for training the machine learning models and performing analysis and the pickle file.
- `svc.pkl`: A machine learning model file trained on the Support Vector Classifier (SVC) algorithm with a linear kernel.
- `main.py`: This contains the Flask application code for running the website, loading datasets, and making predictions with a trained SVC model
- `README.md`: This file, providing information about the FakeNews web app.

## Usage

The MedLife+ platform offers the following functionalities:

- **Input Symptoms**: Enter your symptoms into the system to receive a prediction of potential diseases.
- **View Disease Predictions**: Get detailed information about the predicted disease based on the symptoms you provided.
- **Receive Recommendations**: Obtain personalized recommendations including top 5 medicines, prescription details, workout routines, dietary suggestions, precautions to manage the predicted disease.
- **Access Health Insights**: Explore additional health information and guidelines related to the predicted disease to better understand and manage your health.
