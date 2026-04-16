---
sidebar_position: 0
description: "The CodeGlass client login screen"
---

# Login

![Login page image](./img/login/Login.png)

When you open the [CodeGlass Client](../../intro#client), the first screen you see is the **login page**. The page contains two fields:
- Username
- Password

## Username and Password
Enter the username and password that you used when creating your account.   

Don't have an account yet? Click the register button to go to the [register page](./register).
Once you have registered an account, your password will be sent to your email and you can use that to login. **Don't forget to change your password immediately after receiving it!**

If you forgot your password, you can click the **Forgot password** link. This opens a new tab that redirects you to the LicenseSpring website. There you can enter your username and request a password reset link.

## Auto Login
After a successful login, CodeGlass will try to automatically log you in the next time you open or reload the page.

This automatic login works as long as the Engine is still running. If the Engine is stopped or restarted, you will need to log in again.

## Remote Connection
If the Engine is running on another machine, you can check the remote connection box. This adds an extra field to the form to enter the URL of the engine.

The engine URL should point to the location where the [Engine](../../intro#engine) is running.
By default, the Engine runs on:
```bash
http://localhost:60340
```
