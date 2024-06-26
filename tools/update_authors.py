# update_authors.py
# Ojos Project
#
# In the blog folder of this project, there exists an `authors.yml` file.
# To comply with the Members JSON Protocol, that file will be automatically
# generated with this script.
#
# ! Please run this script from the root of this repository like this:
# ! python tools/update_authors.py
#
# To learn more about the Members JSON Protocol, please visit
# https://ojosproject.org/docs/website/members-json/
import requests

response = requests.get("https://ojosproject.org/data/url/members.json")

if response.status_code == 200:
    data = response.json()
    yaml = ""

    for member in data:
        yaml += f"{member['email']}:\n"
        yaml += f"  name: {member['name']}\n"
        yaml += f"  title: {member['roles'][0]}\n"
        yaml += f"  url: {member['website']['value']}\n"
        yaml += f"  image_url: {member['avatar']}\n"

    with open("./news/authors.yml", "w") as f:
        f.write(yaml)


else:
    print("AN ERROR OCCURRED.")
    print(f"Code: {response.status_code}")
    print(f"Content:\n{response.text}")
