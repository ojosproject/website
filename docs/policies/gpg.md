# GnuPG Guide

[GnuPG](https://gnupg.org/) is a program that helps with encryption and digital
signatures.

GnuPG is used often in the Ojos Project, so it's important for you to know how
to use it.

:::warning

GnuPG deals a _lot_ with encryption and secure passphrases. However, the
encryption is only as strong as your passphrase.

When you're prompted for a passphrase, please choose a secure one.

:::

## Installation

| Platform | Instructions                                         |
| -------- | ---------------------------------------------------- |
| Windows  | Install [Gpg4win](https://gpg4win.org/)              |
| macOS    | Install [GPGTools](https://gpgtools.org/)            |
| Linux    | Install `gpg` using your distribution's instructions |

## Encryption

GnuPG provides an easy way to encrypt files. Ojos Project uses `gpg` to keep
files safe, such as interview files.

| Command           | Description      |
| ----------------- | ---------------- |
| `gpg -c FILE.txt` | Encrypts a file. |
| `gpg FILE.txt`    | Decrypts a file. |

## Commit Signing

When you create a commit, Git uses your `user.name` and `user.email` you give it
when you set up your `git config`, but it doesn't verify that you are who you
say you are. People could impersonate you and commit in your name!

Signing your commits ensures we know that you say who you say you are. We can
tell a commit was signed when it displays a "Verified" badge on GitHub.

:::important

**Your name and email must match everywhere**. It must match on GnuPG, Git, and
GitHub.

:::

### Commands

| Command                               | Description                                                |
| ------------------------------------- | ---------------------------------------------------------- |
| `gpg --generate-key`                  | Create a new key-pair.                                     |
| `gpg --list-keys --keyid-format=long` | List your keys and their `keyId`.                          |
| `gpg --export --armor keyId`          | Outputs the public key. Copy output to GitHub.             |
| `gpg --delete-key keyId`              | Deletes a key. Please delete both public and private keys. |

You can generally add `-secret` to most of these to also manage your private
keys.

### Setup

First, create a key pair and add the public key to GitHub. When you list your
keys, they will be listed in a format similar to this. Make sure to find the
`keyId`.

```plaintext
pub   rsa3072 2024-12-15 [SC]
      48051EAF9A2164BB02FA32BA914E91D21405F16C
uid           [ultimate] Carlos Valdez <cvaldezh@uci.edu>
sub   rsa3072 2024-12-15 [E]
```

My `keyId` is `48051EAF9A2164BB02FA32BA914E91D21405F16C`.

```shell
gpg --generate-key

# List your keys and find the keyId
gpg --list-keys --keyid-format=long

# Add the output to https://github.com/settings/keys
gpg --export --armor keyId
```

Next, configure Git.

```shell
git config --global commit.gpgsign true
git config --global user.signingkey keyId
git config --global gpg.program "READ BELOW"
```

The `gpg.program` depends on how you installed GnuPG.

| Platform    | Value                                      |
| ----------- | ------------------------------------------ |
| Windows     | `C:\Program Files (x86)\GnuPG\bin\gpg.exe` |
| macOS/Linux | `/usr/local/bin/gpg`                       |

Now, let's test your signature.

### Testing your signature

Ojos Project members must test their signature by uploading their public key to
the website. You can do so like this:

:::important

Only clone the website repository if you haven't cloned it before. Otherwise,
just open the folder in your terminal and continue with the rest of
the instructions.

:::

```shell
git clone https://github.com/ojosproject/website
cd website

gpg --list-keys --keyid-format=long
gpg --output static/data/gpg/[firstNameAndLastName].asc --armor --export [keyId]

git add .
git commit -m "chore(keys): add key"
git push origin main
```

If everything worked correctly,
[check your commit](https://github.com/ojosproject/website/commits/). If your
commit has a "Verified" badge, you've successfully set up GPG key signing.
Congratulations!

## Extra Instructions for Windows

When you do a full restart of your PC, the GPG agent may not automatically start
for you. Therefore, it's highly recommended that you add a shortcut of the
`gpg-connect-agent.exe` to the list of programs that start when you log into
your computer. You can do so with PowerShell:

```powershell
$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut("C:\Users\$($Env:UserName)\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\gpg-connect-agent.lnk")
$shortcut.TargetPath = "C:\Program Files (x86)\GnuPG\bin\gpg-connect-agent.exe"
$shortcut.Arguments = "/bye"
$shortcut.Save()
```

<!-- markdownlint-disable no-inline-html -->

<a href="ms-settings:startupapps">Click here to see if it was properly added.</a>
It should be labeled as "GnuPG's IPC tool".

<!-- markdownlint-enable no-inline-html -->

However, if you'd rather do this manually every time you start your computer,
you can do so with this command:

```shell
gpgconf --launch gpg-agent
```
