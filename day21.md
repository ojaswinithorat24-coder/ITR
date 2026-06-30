# Day 3 – Internship Diary

**Date:** July 1, 2026

## Topics Learned

* Introduction to Python Virtual Environments
* Creating a Virtual Environment using `venv`
* Activating and Deactivating a Virtual Environment
* Installing Packages using `pip`
* Managing Project Dependencies
* Understanding the Importance of Isolated Development Environments
* Basic PostgreSQL Configuration and Authentication (`pg_hba.conf`)
* Troubleshooting PostgreSQL Login and Password Reset

## What I Learned

Today, I learned how to create and use a Python virtual environment. A virtual environment allows each project to have its own isolated Python packages and dependencies, preventing conflicts between different projects. I practiced creating a virtual environment using the `venv` module, activating it, installing required packages with `pip`, and deactivating it after use.

I also learned why virtual environments are essential in real-world software development, especially when working on multiple projects with different package versions.

Additionally, I explored basic PostgreSQL configuration. I understood the purpose of the `pg_hba.conf` file, how PostgreSQL handles authentication, and the general process of troubleshooting login issues and resetting database passwords.

## Commands Practiced

```bash
python -m venv venv
venv\Scripts\activate
pip install <package-name>
pip list
deactivate
```

## Key Takeaways

* Every Python project should have its own virtual environment.
* `pip` is used to install and manage project dependencies.
* Virtual environments help avoid package version conflicts.
* PostgreSQL authentication is controlled through the `pg_hba.conf` configuration file.
* Understanding configuration files is important for database administration and troubleshooting.
