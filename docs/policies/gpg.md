---
displayed_sidebar: policies
description: >
  Ojos Project uses the GnuPG tool a lot for encryption and commit signatures.
  It's important to understand how to use the gpg tool.
---
# GnuPG

GnuPG, often just referred to as `gpg`, is an encryption and digital signing
tool. `gpg` is used often in the Ojos Project as we encrypt interview notes and
sign our commits. It is important that you understand how to use it.

:::warning

GnuPG deals a _lot_ with encryption and secure passphrases. However, the
encryption is only as strong as your passphrase.

When you're prompted for a passphrase, please choose a secure one.

:::

:::note

You might hear people say "PGP keys" instead of "GPG keys." They're basically
the same thing as they both follow the OpenPGP standard.

:::

## Installation

All you really need is [GnuPG](https://gnupg.org), but I recommend you install
these instead as they come with GnuPG, integrate with your OS and even have GUI
tools to help manage your GPG keys, such as Kleopatra (Windows) and the GPG
Keychain (macOS).

| Platform | Instructions                                         |
| -------- | ---------------------------------------------------- |
| Windows  | Install [Gpg4win](https://gpg4win.org/)              |
| macOS    | Install [GPGTools](https://gpgtools.org/)            |
| Linux    | Install `gpg` using your distribution's instructions |

## Encryption

GnuPG provides an easy way to encrypt files. Ojos Project uses `gpg` to keep
files safe, such as interview files.

**If you're encrypting to another Ojos Project member, please use asymmetric
encryption.**

### Symmetric Encryption

If a file is encrypted with symmetric encryption, you only need the encryption
password to decrypt the file. You must ask the person who encrypted the file for
the password.

| Command            | Description      |
| ------------------ | ---------------- |
| `gpg -c FILE.txt`  | Encrypts a file. |
| `gpg FILE.txt.gpg` | Decrypts a file. |

### Asymmetric Encryption

If a file is encrypted with asymmetric encryption, it means a file must be
unlocked with the recipient's private key. This makes it so that _only the
intended recipients can decrypt the key_. It sounds complicated, but it really
isn't.

| Command                              | Description                                                                                                                                        |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gpg -sea -r [emailOrName] FILE.txt` | Signs and encrypts a file with `[emailOrName]` as the recipient. Add more `-r` per recipient. Add yourself as a recipient if you need a copy, too. |
| `gpg FILE.txt.gpg`                   | Decrypts a file, if you're the recipient. You will be asked for your passphrase.                                                                   |

You must have the recipient's public key on your machine. You can find
everybody's public key in the [members page](/docs/members/).

Importing on macOS/Linux:

```shell
curl https://ojosproject.org/data/gpg/[name].asc | gpg --import
```

Importing on Windows:

```powershell
Invoke-WebRequest -Uri "https://ojosproject.org/data/gpg/[name].asc" -UseBasicParsing | Select-Object -ExpandProperty Content | New-Item -Path . -Name "temp.asc" -ItemType "file" -Force | Out-Null;  gpg --import temp.asc; Remove-Item -Path temp.asc -Force
```

Finally, sign the newly imported public key.

```shell
gpg --sign-key [emailOrName]
```

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
pub   ed25519/78C756F8FAC03006 2024-12-14 [SC]
      F16D2B9D8739A4503AE694FF78C756F8FAC03006
uid                 [ultimate] Carlos Valdez <cvaldezh@uci.edu>
sub   cv25519/3EB4C61C1FC290D1 2024-12-14 [E]
```

My `keyId` is `F16D2B9D8739A4503AE694FF78C756F8FAC03006`.

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
