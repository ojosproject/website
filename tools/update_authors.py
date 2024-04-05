# update_authors.py
# Ojos Project
# 
# In the blog folder of this project, there exists an `authors.yml` file.
# To comply with the Members JSON Protocol, that file will be automatically
# generated with this script.
# 
# To learn more about the Members JSON Protocol, please visit
# https://docs.ojosproject.org/url/developers/webdev/members-json/
import requests

response = requests.get("https://docs.ojosproject.org/data/url/members.json")

if response.status_code == 200:
    data = response.json()
    yaml = ""

    for member in data:
        yaml += f"{member['email']}:\
        \n  name: {member['name']}\
        \n  title: {member['roles'][0]}\
        \n  url: {member['website']['value']}\
        \n  image_url: {member['avatar']}\n"

    with open("./blog/authors.yml", "w") as f:
        f.write(yaml)


else:
    print("AN ERROR OCCURRED.")
    print(f"Code: {response.status_code}")
    print(f"Content:\n{response.text}")
