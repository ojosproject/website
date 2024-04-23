---
displayed_sidebar: groupUrlTeamDevelopers
description: >
    Let's go over the Linux filesystem.
last_update:
    author: Carlos Valdez
    date: April 18 2024
---
# The Linux Filesystem

At first, the Linux filesystem might be a bit scary at first, but it's actually
super simple. Let's quickly go over what the Linux filesystem looks like in this
document.

## Top of the Filesystem

The top of the filesystem includes a lot of different folders. This is how mine
looks like:

```plaintext
/boot
/dev
/etc
/home
    /calejvaldez
        /git
/lost+found
/media
/mnt
    /c
        /Users
            /calejvaldez
                /Desktop
                /Documents
                /Downloads
                /Pictures
                /Videos
/opt
/proc
/root
/run
/srv
/sys
/tmp
/usr
/var
```

This document will only focus on `home`, `mnt`, and `opt`. If you want
to learn more about the Linux filesystem, [Fireship.io has a great video on the
subject](https://www.youtube.com/watch?v=42iQKuQodW4).

## Symbols

There's two common symbols in the Linux filesystem, especially if you use the
command line. One of them is `/`, which represents the very top of the
file system. Another one is `~`, which represents your home folder. It is a
shorthand way of saying `/home/[YOUR_USERNAME]/`.

| Symbol | Meaning                                                             |
| ------ | ------------------------------------------------------------------- |
| `/`    | The root directory, [top of the filesystem](#top-of-the-filesystem) |
| `~`    | Your home folder, shorthand way of saying `/home/[YOUR_USERNAME]`   |

So, if I run `cd ~`, I'm really saying `cd /home/calejvaldez/`.

## `home`

[`home` in the Fireship video](https://youtu.be/42iQKuQodW4?si=_lrAg1l45EiGvAoi&t=92).

One of the folders at the very top of the filesystem is the `home` folder. It
contains your files, as well as other users' files. If you go into this folder,
you will find other folders named after your Linux username.

```plaintext
/home
    /calejvaldez
        /git
    /another-user
    /yet-another-user
```

If you `cd` into `/home/calejvaldez/` (or `~`, since they both mean the same
thing), you will see your personal files. For the majority of us, we will only
have the `git` folder in here.

:::tip

WSL users:

When you first WSL using the Debian icon, it'll display your username and the
folder you're in. For example, in my case, it's `calejvaldez(~)`. This indicates
your in your personal home folder.

:::

## `mnt`

The `mnt` folder just stands for "mount". Usually, other connections such as a
USB connection (or, for WSL users, the Windows filesystem) will appear here.

This is how it looks like for me on WSL:

```plaintext
/mnt
    /c
        /Users
            /calejvaldez
                /Desktop
                /Documents
                /Downloads
                /Pictures
                /Videos
```

In the `mnt` folder, there's the `c` folder, which indicates the Windows `C:`
drive. Inside of the `c` folder, there's the `Users` folder. Then there's the
usernames of the people with an account on your computer. Go to yours, and you
will find your personal Windows files.

:::tip

WSL users:

If you used the `linux-setup.sh` script, you have a custom command called
`cdrive`, which automatically runs `cd /mnt/c/Users/[WINDOWS_USERNAME]/` so that
you have quick access to your files.

How to use:

```shell
calejvaldez(~) > cdrive
calejvaldez(/mnt/c/Users/calejvaldez) > ls
 Desktop
 Documents
 Downloads
 Pictures
 Videos
 # ... tons of other folders!
```

:::

## `opt`

[`opt` in the Fireship video](https://youtu.be/42iQKuQodW4?si=0rn8rk0s7L9R345_&t=132).

`opt` stands for "optional", which is where some, not all, apps are installed.
For the Ojos Project, we're going to install an Iris app here.

On my old Linux system, I used to have 1Password and Signal installed. It would
look like this:

```plaintext
/opt
    /1Password
        ... loads of files!
    /Signal
        ... loads of files!
```

If you're using WSL, this folder will likely be empty.

## Conclusion

There's obviously way more folders in the `/` folder, but these three are the
main focus for the project. We won't really interact with the other folders.
