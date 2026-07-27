# Development Log

This document serves as the engineering log for this portfolio project.

Its purpose is to document every important decision, implementation step, and architectural choice throughout the project lifecycle.

Rather than relying on memory, this log provides a complete history of how the project has evolved.

---

# Project Information

Project Name

Personal Portfolio

Purpose

To build a professional portfolio showcasing software development, cloud computing, and technical projects.

The portfolio itself is also intended to demonstrate front-end engineering skills, clean architecture, maintainable code organisation, and good documentation practices.

---

# Development Session

Date

27 July 2026

Session

Project Foundation

Duration

Approximately one hour

---

# Objectives

The goals for today's session were to:

- Decide on the technology stack.
- Create a new React application.
- Install required dependencies.
- Resolve project structure issues.
- Create a clean folder architecture.
- Prepare the project for future development.
- Begin project documentation.

---

# Technology Decisions

Framework

React

Reason

Component-based architecture, scalability, and industry adoption.

---

Build Tool

Vite

Reason

Fast development server, modern tooling, and excellent React support.

---

Routing

React Router DOM

Reason

Supports multiple pages while maintaining a single-page application architecture.

---

Styling

Tailwind CSS

Reason

Utility-first CSS framework allowing rapid and maintainable UI development.

---

Component Library

DaisyUI

Reason

Provides reusable UI components while remaining fully compatible with Tailwind CSS.

---

Version Control

Git

Reason

Track development history and prepare the project for GitHub.

---

# Project Issues Encountered

During project setup an incorrect folder was accidentally used.

A manually created folder named:

Documents/Portfolio

contained manually created files but was not a valid Vite application.

At the same time, the actual Vite application existed in:

~/portfolio

This caused confusion because both folders had similar names.

After investigation the correct Vite project was identified and the manually created folder was discarded.

No development work was lost because only folder structures had been created.

---

# Packages Installed

Dependencies installed

- React
- React DOM
- React Router DOM
- Tailwind CSS
- DaisyUI

Development dependencies

- Vite
- ESLint
- Vite React Plugin

---

# Folder Structure

The application was reorganised into feature-based folders to improve maintainability.

Created folders include:

assets

components

common

layout

sections

ui

data

hooks

layouts

pages

routes

styles

utils

This structure is intentionally scalable so future features can be added without major refactoring.

---

# Documentation Strategy

Three documentation files were introduced.

README.md

Public project documentation for GitHub visitors.

DEVELOPMENT_LOG.md

Engineering log documenting every development session.

PROJECT_ROADMAP.md

High-level planning document describing future milestones.

This mirrors documentation practices used in professional software teams.

---

# Current Status

Completed

✔ Project created

✔ Dependencies installed

✔ Folder structure organised

✔ Development documentation started

Next

- Configure Tailwind CSS
- Configure DaisyUI
- Build application layout
- Create navigation
- Create homepage
- Deploy first version

---

# Notes

This project is intended to grow continuously.

Each completed cloud project, software project, certification, and technical case study will eventually be integrated into the portfolio.

The objective is not simply to build a website but to build a professional engineering portfolio demonstrating technical growth over time.