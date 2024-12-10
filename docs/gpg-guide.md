# GnuPG Guide

## Installing

macOS and Linux users can use their package managers to install GPG. This is
how to do it with [brew](https://brew.sh):

```shell
brew install gpg
```

Windows users can install it with [Gpg4win](https://gpg4win.org/).

:::tip

Windows users, please run:

```shell
git config --global gpg.program "C:\Program Files (x86)\GnuPG\bin\gpg.exe"
```

:::

## Encryption

### Decrypting a file

To decrypt a file, say an interview file, you can use this:

```shell
gpg file-name.mp4.gpg
```

It will prompt you for a passphrase. Please use a secure passphrase.

### Encrypting a file

To encrypt a file, fun:

```shell
gpg -c file-name.mp4.gpg
```

It will prompt you for a passphrase. Please use a secure passphrase.

## Commit Signing

### Creating a new key-pair

:::important

**The name and email you provide to GnuPG must be the same email you give to Git**.
Please use your name and email that's on the [members page](/docs/members/).
For example, Carlos would do:

```shell
git config --global user.name "Carlos Valdez"
git config --global user.email cvaldezh@uci.edu
```

:::

```shell
gpg --full-generate-key
```

Use the default values. Set "expire" to `0`, or as long as you expect to work
on Ojos Project. Save your full name as seen on [the members page](/docs/members)
and use your UCI email.

It will prompt you for a passphrase. Please use a secure passphrase.

### Listing your keys (and finding the keyId)

```shell
gpg --list-keys --keyid-format=long
gpg --list-secret-keys --keyid-format=long
```

Make sure to copy the `keyId`.

:::important

If you're creating a key for commit signing finish your Git configuration with:

```shell
git config --global commit.gpgsign true
git config --global user.signingkey = "keyId"
```

:::

### Exporting/Importing to another device

Remember, you have to import/export both public and private keys.

Save your keys on a pair of files:

:::warning

Please keep a backup of the contents of these files in a safe place!

:::

```shell
gpg --export --armour keyId >> public_key
gpg --export-secret-key --armour keyId >> private_key
```

On your new device:

```shell
gpg --import public_key
gpg --import private_key
```

### Deleting a key

```shell
gpg --delete-key keyId
gpg --delete-secret-key keyId
```
