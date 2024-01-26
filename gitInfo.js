/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "One of the most widely used up to date version control systems out there right now is Git. It's a mature, very actively maintaned open source project first developed in 2005 by Linus Torvalds, a famous creator of the well known Linux operating system kernel. Being endowed with a distributed architecture, Git is more then enough of an example of a DVCS (Distributed Version Control System). As opposed to having onely one single locatoin for the full version history of any software as is common in version control systems that used to be popular like CVS or Subversion (aka SVN) in Git, every single developer's working copy of whichever code they are working on is also a repository that can contain the full history of any changes made. As a DVCS it's designed with performance, security and flexibility in mind."
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "When looked at at a high level, Github can be described as a website and cloud based servce which helps developers store and organzie their code, alongwith tracking and controlling changes to their code. Two connceted principlies are therefore vital to understand: version control and Git. Version control helps developers track and rearrange changes to their software project's code. Over time as it grows, version control becomes evermore essential, allowing safe code management with branching and merging. Branching for example allows a develper to duplicate part of the source code (aka repository), and to edit it without worry of affecting the rest of the project with unforseen consequences. Once they're confident enough that it's good to go, it can be merged back into the source code to make it offical. All of which is tracked and can be reverted if needed. Git on the otherhand is a specific open-source version control system originated by Linus Torvalds in 2005. More technically, it's a distributed version control system, meaning the entire codebase and history is accessible on every developer's computer, allowing for easy branching and merging. Github then is a for-proft company that offers a cloud-based Git repository hosting service to all who so desire it, making it a lot easier for individuals and teams to utilize Git for version control and collaboration. Github's interface is also user-friendly enough to were even nocie coders can make full use of Git. Without GitHub, using Git alone generally requires a bit tech saviness and use of the command line.User friendly enough to make writing books a appeasing inquiry for some users. Anyone can sign up and host any public code repository they want for free, making GitHub quite popular with open-source projects."
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "Git init is a command which create a new Git repositroy, converting exisiting unversioned projects to a Git repository or initializing new empty repositories. Seeing as how most other Git commands aren't available outside initialized repositories, this ends up being the first command you usually run within a new project. Upon execution a '.git' subdirectory is made in the working directory, which houses all the necessary Git metadata for the new repository, which can include objects, refs, and template files. A 'HEAD file is likewise created pointing to the currecntly checked out commit. "
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = "A command line utility within Git often used to target pre-existing repositories and spawn a clone, or copy of said target repository."
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "A git command that displays the current status of the working directory and the available staging area. Thereby allowing you to see which changes have already been staged, which have not, and which files are not being tracked at all by Git."
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "A git command which adds a change into the working directory to the current staging area, telling Git that you want to include updates to a specific file within the next commit. Though until you run 'git commit' changes are not yet recorded."

let gitAddCode = "git add ."
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = "Git clone happens to be a Git command line utility used to target an existing repository and spawn a clone, or replica of the target repository."

let gitCommitCode = "git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY"

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = "A git command to upload local repository content to a specificed remote repository. It is how you transfer commits from within a local repository to a remote one."