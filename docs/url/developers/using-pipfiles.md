---
displayed_sidebar: groupUrl
last_update:
    author: Carlos Valdez
    date: May 2 2024
---
# `pip`, Pipfiles, and Pipenv

This will help you install Pipfiles and the virtual environment for this project.

Pipenv creates virtual environments for your Python project, ensuring that your
system doesn't break. You likely have a version of Python pre-installed in your
computer. If we keep installing things with regular `pip`, it may break things.
Therefore, to keep your computer safe, we're going to use Pipenv.

## Terminology

| Term            | Description                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| package         | A library with code created by someone else that we want to use in our project.                                                                                                              |
| package manager | A package manager is a program that installs other programs on your computer. There's many of them, such as `dnf`/`apt` for Linux, `pip` for Python, `npm` for NodeJS, and `cargo` for Rust. |
| `pip`           | A package manager for Python                                                                                                                                                                 |
| `Pipfile`       | Pipfiles is a file that includes the packages required for our program, written in [TOML](https://quickref.me/toml)                                                                          |
| `Pipfile.lock`  | This file includes the hashes of the packages, giving it extra security.                                                                                                                     |

## `python`/`pip` or `python3`/`pip3`?

Python has been used for a very long time. We're currently in version 3 of the
language, but some systems came preinstalled with version 2. Version 2 of Python
is often `python` in the command line, and version 3 is `python3`. Likewise,
`pip` is for Python 2.x, and `pip3` is for version 3.x. Check your version by
running:

```shell
python --version
```

:::warning

Although this tutorial uses `python`/`pip`, please make sure you are using
Python 3.x. **Python 2 is not a good idea to use.**

:::

## `pip`

In Python, `pip` is often used to install external libraries. It can be a handy
tool to know as its become the defacto Python package manager.

### Installing `pip`

If you don't know whether or not you have `pip` installed, run this command:

```shell
pip --version
```

If you get a version number, you're set to go! Otherwise, please install `pip`
by [downloading this script](https://bootstrap.pypa.io/get-pip.py) and running:

```shell
cd ~/Downloads
python get-pip.py
```

### Installing packages with `pip`

To install packages system-wide, it's as simple as running...

```shell
pip install requests
```

In the example above, we're trying to install
[Requests](https://requests.readthedocs.io/en/latest/), a popular HTTP library
for Python.

### `requirements.txt`

Some projects include a `requirements.txt` file in their repository. These files
include the libraries that the project requires to run.

A sample `requirements.txt` file looks like this:

```plaintext
requests==2.31.0
```

If you ever have to install from `requirements.txt` with `pip`, you can run this
command:

```shell
pip install -r requirements.txt
```

## `Pipenv`

There's a few issues with `pip`. First of all, it usually installs packages
*globally*, meaning it could break some apps on your system that are built with
Python. Secondly, installing from `requirements.txt` don't really provide much
security. Thirdly, some projects require different versions of Python and
different packages installed.

This is where `Pipenv` comes in. It creates a virtual environment for our
project. It makes sure it does not interact with our system packages.

### Installing `Pipenv`

Install Pipenv globally by entering in your terminal:

```shell
pip install --user pipenv
```

### Creating a `Pipenv` project

To create a project, go into a newly created folder and decide on a Python
version you want to use. For the sake of this document, we'll use Python 3.11.

In the terminal of a new project folder, enter:

```shell
pipenv --python 3.11
```

This creates the Pipfile and installs the virtual environment.

### Installing packages with `pipenv`

Using `pipenv` to install packages is very similar to using `pip`.

Enter the following commands to install the correct packages and their appropriate options for this project:

```shell
pipenv install requests
```

If you want to install a specific version, you can run:

```shell
pipenv install requests==2.31.0
```

## Generating `requirements.txt` from Pipfiles

Sometimes, you *need* a `requirements.txt` file. We can create one from our
Pipfile by running:

```shell
pipenv requirements > requirements.txt
```
