---
layout: default
permalink: /privacy-en/
---

# Privacy Policy

**App:** Envelopes: My Budget (Android)
**Developer:** Ivanov Oleg
**Contact:** support@envelopesbudget.org
**Effective date:** 13 August 2026

## In short

The app has no server of its own. Your financial data is stored on your
device and, if you choose to enable it, in your own cloud storage. The
developer does not receive, store or process this data and has no technical
means of seeing it.

The app contains no advertising, uses no analytics, and shares no data with
third parties for marketing.

## What data the app handles

Everything you enter yourself: accounts, transactions, amounts, categories,
payees, notes, scheduled payments, goals and — if you wish — photos of
receipts. This information is kept in a database on your device.

The app does **not** request or collect your name, address, phone number,
contacts, list of installed apps, advertising identifiers or location data.

## Where the data is stored

**On your device.** The primary storage is a database in the app's protected
area. Uninstalling the app removes this data with it.

**In your cloud — only if you connect it yourself.** The app can synchronise
your budget and store backups in one of these services: Google Drive, Dropbox
or a WebDAV server. Data travels directly between your device and your own
account in that service. The developer is not part of this chain and has no
access to the files.

For Google Drive the app uses restricted access (`drive.file`): it can only
see the files it created itself and cannot browse the rest of your drive. In
Dropbox the app works inside its own folder and has no access to other files.

**Over your local network.** There is a mode for transferring data directly
between two of your own devices over Wi-Fi. The data goes directly, bypassing
the internet and any servers, and is encrypted with a one-time confirmation
code that you enter manually.

## Encryption

Backups that go to the cloud can be encrypted with a password you set
(AES-GCM, key derived via PBKDF2). The password is kept only on your device
in the Android secure storage and is never transmitted. **If you forget this
password, the encrypted backup cannot be recovered** — neither by you nor by
the developer.

Wi-Fi transfers between devices are encrypted as well; the key is derived
from the six-digit confirmation code, and the code itself is never sent over
the network.

## Permissions and why they are needed

| Permission | Purpose |
|---|---|
| Internet | synchronisation with the cloud storage you connected |
| Camera | photos of receipts and QR code scanning |
| Microphone | voice entry of a transaction (recognition is done by Android) |
| File access | saving and reading backups, import and export |
| Biometrics | unlocking the app with a fingerprint or face |
| Notifications | reminders about scheduled payments |
| Local network | direct transfer between your own devices over Wi-Fi |

The app does not request location permission.

Voice entry uses the Android system speech recognition service. The spoken
phrase is processed by the operating system and is subject to the privacy
policy of that system's provider.

## Third-party services

The app contacts only the services you connect yourself:

- **Google Drive** — [Google Privacy Policy](https://policies.google.com/privacy)
- **Dropbox** — [Dropbox Privacy Policy](https://www.dropbox.com/privacy)
- **WebDAV** — the server you specify; its terms are set by its owner

None of these services receive data from the developer — only from you and at
your initiative.

## Payments

If paid features appear in the app, payments will be processed through Google
Play. Payment details are handled by Google and are not passed to the
developer. The developer receives from Google Play only the purchase status
needed to grant access.

## Children

The app is not directed to children under 13 and does not knowingly collect
data from them.

## Your rights and data deletion

The data is yours and stays under your control:

- to delete data from the device — uninstall the app or use the reset option
  in settings;
- to delete data from the cloud — remove the app's folder in your Google
  Drive, Dropbox or on your WebDAV server;
- to take your data with you — the app can export a backup as a file and
  export transactions to CSV.

There is no need to send a deletion request to the developer: the developer
does not hold your data.

## Error log

The app keeps a technical log of synchronisation events and errors. The log
is stored on the device only, is never sent anywhere automatically, and is
visible to you in settings. If you decide to send it to help resolve an
issue, that happens solely through your explicit action.

## Changes to this policy

The current version of this document is always available at https://envelopesbudget.org/privacy-en/.
If the policy changes materially, the effective date will be updated.

## Contact

Privacy questions: support@envelopesbudget.org
