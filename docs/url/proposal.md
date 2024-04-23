---
displayed_sidebar: groupUrl
description: >
    Read the proposal for the URL Group.
last_update:
    author: Carlos Valdez
    date: September 29 2023
---
# URL Proposal

:::note

This was the original proposal Carlos submitted to Professor Baldwin when he was
accepting proposals for the Undergraduate Research Lab. I am including this here
for historical reasons.

:::

Individuals who are on hospice care and are immobile (that is, must be seated or laying down) tend to lose their independence and have to rely on others. When family members want to try to help, but can't, it's heartbreaking. Therefore, I propose a display that would act as an assistant/quick automation for the patient. For the technical aspects, I suggest a Raspberry PI touch display (https://www.raspberrypi.com/products/raspberry-pi-touch-display/) connected with a Camera Module 3 and Codec Zero (for audio I/O). The program would be created via web technologies like HTML, CSS, and TypeScript. Specifically, with React. The camera can be used to have family members who may be at work to view the patient from work. Sometimes patients may fall, or as their family members, we get anxiety and need to see them. This camera would help with that. A microphone would be included too so that the patient can speak to the family member. This would need a web browser interface as well, at least for family members, but since the display itself would be backed by web technologies, it would be a somewhat similar implementation. The microphone can also be used for simple voice commands.

What is the most interesting part can be API calls. If connected to WiFi, we can make it so that it can make API calls to other services, or even our own cloud API. Potentially get data like weather, log medication, send push notifications to family about the status of the device, and more. This can also include an extension for buttons to handle quick requests, such as contacting a nearby family member, or requesting help. Similarly, family members would be able to control the display from afar via the browser interface. They would be able to control settings, integrations, I/O settings, device administration, etc. This device may not seem like much, but the idea can be built upon itself especially with integrations. A device like this can make a massive difference to working family members who want to help somebody in need. This was inspired by my experience witnessing my mom caring for my grandma in hospice. Nobody but my mom could be there for her, but she was a working mother.
