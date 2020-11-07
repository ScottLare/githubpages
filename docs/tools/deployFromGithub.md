# Deploy

## Deploy from github to Kaleido

**Note** You only need a personal access token if your github repo is a private repo.

First - On my github get or set up if first time, the Personal Access 

[Create a github Personal Access Token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)

#### How

Got to your github account and select your repository that has the solidity file in that you want to deploy to Kaleido.

Go to developer settings in github.


![Image](../.vuepress/public/images/k_githubDevSettings_1.png "k_githubDevSettings_1.png")

![Image](../.vuepress/public/images/k_githubDevSettings_2.png "k_githubDevSettings_2.png")

Just change the version number and nothing else and see what happens?

![Image](../.vuepress/public/images/k_deployment_1.png "k_deployment_1.png")

Starting at the "Node Overview" page, click on the "Import Smart Contract" button.

![Image](../.vuepress/public/images/k_deployment_2.png "k_deployment_2.png")

which brings you to the following screen shot illustration.  Select the radio button for a github deployment.

![Image](../.vuepress/public/images/k_deployment_3.png "k_deployment_3.png")


![Image](../.vuepress/public/images/k_deployment_4.png "k_deployment_4.png")

**Note** what happens if you select an existing project from the dropdown list.

![Image](../.vuepress/public/images/k_deployment_5.png "k_deployment_5.png")

**Note** Interesting choice for UI design here. The title of the prompt "project" at first made me think that I was supposed to type the project name into the input field, but it is a drop down component that does not allow that. The good news here is that it is quite obvious what to do because you are presented with two components at this point in the UI and the only other component on the bottom must be for adding a new project, but it felt a little clunky for me honestly.  (Not that means it should change - just communicating thoughts.)

I might have preferred a list box component of the already exisiting projects to select from and that list box should also have the capability to group and list any of same projects that only differed beause of differing versions. An instructional comment could be added that read "Select an existing project to re-upload" or "Enter a new project name".

:TODO - if time, come back and add a wireframe of alternative idea

![Image](../.vuepress/public/images/k_deployment_5.png "k_deployment_5.png")

Thought to make the below screen, one choice. Either "select an existing" or "Add a new project" choice to the user.  As mentioned above, what if I want to see all the different versions of the same project now and either select to re-upload the same version or add a next version?  In this current scenario, I can only see the version/description when I advance to the next page.

![Image](../.vuepress/public/images/k_deployment_6.png "k_deployment_6.png")

Currently, next page is illustrated below.

![Image](../.vuepress/public/images/k_deployment_7.png "k_deployment_7.png")

For now, skip this first drop down prompt and leave it at the "Create New Project" text, proceed to the second component labeled "project name" and type in your new "project name" as illustrated below.

![Image](../.vuepress/public/images/k_deployment_8.png "k_deployment_8.png.png")

Next, make sure to grab the exact github URL address where your solidity file resides in your github repository.

![Image](../.vuepress/public/images/k_deployment_9.png "k_deployment_9.png")

Copy that github URL and when you go to the next screen in the Kaleido framework, you only have to paste it in, and you are good to go.  Super Easy!

Kaleido will copy your solidity source code, compile it into bytecode and deploy it on the nodes of your Kaleido blockchain.

![Image](../.vuepress/public/images/k_deployment_10.png "k_deployment_10.png")

Whoops - what went wrong?  I would have thought that the Kaleido framework would find the solidity source code located at the github URL address and do the compile step for me.  Hmmmph... What did I do?

![Image](../.vuepress/public/images/k_deployment_11.png "k_deployment_11.png")

Off to the Kaleido docs.


![Image](../.vuepress/public/images/k_deployment_14.png "k_deployment_14.png")

which brings me [here](https://docs.kaleido.io/using-kaleido/smart-contracts/).
as illustrated below.


![Image](../.vuepress/public/images/k_deployment_12.png "k_deployment_12.png")

and

![Image](../.vuepress/public/images/k_deployment_13.png "k_deployment_13.png")

more from docs.

![Image](../.vuepress/public/images/k_deployment_16.png "k_deployment_16.png")

and

![Image](../.vuepress/public/images/k_deployment_17.png "k_deployment_16.png")

Okay, I figured that out the harder way. **I am trying to upload the same bytecode that already exists on the blockchain and that is not allowed.**  This is appropriately checked for me by Kaleido doing a compare and flags the compile when attempting to do the "Import" with a "failed" status and corresponding error message as to why the code failed to compile.  

![Image](../.vuepress/public/images/k_deployment_18.png "k_deployment_18.png")

How to get there - why tricky for me?  Because I did not realize that there was more to the right of the screen :-()   In the illustration below when I go to the dashboard, as noted it is not so obvious.


![Image](../.vuepress/public/images/k_deployment_19.png "k_deployment_19.png")

Until, I scroll my screen to the right and notice the other options. :smile:

![Image](../.vuepress/public/images/k_deployment_20.png "k_deployment_20.png")

## Contract Details Screen

![Image](../.vuepress/public/images/k_deployment_21.png "k_deployment_21.png")

Click on the "Failed" compile to see the details and to delete it.

![Image](../.vuepress/public/images/k_deployment_22.png "k_deployment_22.png")

![Image](../.vuepress/public/images/k_deployment_23.png "k_deployment_23.png")

Select the "Delete" option.

![Image](../.vuepress/public/images/k_deployment_24.png "k_deployment_24.png.png")

Confirm the delete.

![Image](../.vuepress/public/images/k_deployment_24.png "k_deployment_24.png.png")

Back to normal.


![Image](../.vuepress/public/images/k_deployment_25.png "k_deployment_25.png.png")
