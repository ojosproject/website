# update_authors.py
# Ojos Project
# 
# This script adds a new person to the `authors.yml` file. You can use it like
# this:
# `python tools/update_authors.py [email_of_person_to_add]`
# 
# So, if you wanted to add Carlos, you would run:
# `python tools/update_authors.py cvaldezh@uci.edu`
# 
# This script also adds people's websites using the `socials` key rather than
# the old `url` key.
import sys
import json

def type_of_website(value: str):
    if "linkedin" in value:
        return "linkedin"
    elif "mailto:" in value:
        return "email"
    else:
        return "website"

if __name__ == "__main__":
    requested_member: str

    # allow CLI arguments
    if len(sys.argv) > 1:
        requested_member = sys.argv[1]
    else:
        requested_member = input("Who should I get? Input their email: ")
    
    content = ""
    with open("./static/data/members.json", "r") as member_data:
        content = member_data.read()


        data: list[dict] = json.loads(content)
        yaml = ""

        filtered = list(filter(lambda member: member['email'] == requested_member, data))

        if not len(filtered):
            print("AN ERROR OCCURRED.")
            print(f"'{requested_member}' was not found in the `members.json` file.")

        member = filtered[0]
        

        yaml += f"{member['email']}:\n"
        yaml += f"  name: {member['name']}\n"
        yaml += f"  title: {member['roles'][0]}\n"
        yaml += f"  image_url: {member['avatar']}\n"
        yaml += f"  socials:\n"
        yaml += f"    {type_of_website(member['website']['value'])}: {member['website']['value']}\n"

        with open("./news/authors.yml", "a") as f:
            f.write(yaml)
