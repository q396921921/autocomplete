const fileOrFolder: Fig.Generator = {
  script: "ls -al | awk '{print $9}'",
  postProcess: (output) => {
    if (output.startsWith("fatal:")) {
      return [];
    }
    return output.split("\n").map((branch) => {
      return { name: branch.replace("*", "").trim(), description: "Branch" };
    });
  },
};
const fileDirArgs: Fig.Arg[] = [
  {
    name: "filename or dirname",
    template: ["filepaths", "folders"],
  },
];

const completionSpec: Fig.Spec = {
  name: "chattr",
  description: "Change file attributes on a Linux file system",
  subcommands: [
    {
      name: "-R",
      description:
        "Recursively change attributes of directories and their contents",
      // args: {
      //   name: "branch",
      //   description: "The branch you want to checkout",
      //   isOptional: true,
      //   generators: branches,
      // },
      // options: [
      //   {
      //     name: "-b",
      //     description: "Create and checkout a new branch",
      //     args: {
      //       name: "New branch",
      //     },
      //   },
      // ],
    },
    {
      name: "-V",
      description:
        "Be verbose with chattr's output and print the program version",
      // args: {
      //   name: "branch",
      //   description: "The branch you want to checkout",
      //   isOptional: true,
      //   generators: branches,
      // },
      // options: [
      //   {
      //     name: "-b",
      //     description: "Create and checkout a new branch",
      //     args: {
      //       name: "New branch",
      //     },
      //   },
      // ],
    },
    {
      name: "-f",
      description: "Suppress most error messages",
      // args: {
      //   name: "branch",
      //   description: "The branch you want to checkout",
      //   isOptional: true,
      //   generators: branches,
      // },
      // options: [
      //   {
      //     name: "-b",
      //     description: "Create and checkout a new branch",
      //     args: {
      //       name: "New branch",
      //     },
      //   },
      // ],
    },
    {
      name: ["version", "-v"],
      description:
        "Set the file's version/generation number.The command only applies to file systems that support the version number attribute, such as ext3 or ext4 file systems. If you are using other file systems or storage media, you may not be able to use this command",
      insertValue: "-v '{cursor}'",
      args: {
        name: "version",
        description: "The version number to set",
      },
      // args: {
      //   name: "fileOrFolder",
      //   description: "The file or directory for which the version number needs to be set",
      //   generators: fileOrFolder,
      // },
    },
    {
      name: ["-p", "project"],
      description: "Set the file's project number",
      // args: {
      //   name: "branch",
      //   description: "The branch you want to checkout",
      //   isOptional: true,
      //   generators: branches,
      // },
      // options: [
      //   {
      //     name: "-b",
      //     description: "Create and checkout a new branch",
      //     args: {
      //       name: "New branch",
      //     },
      //   },
      // ],
    },
  ],
};
export default completionSpec;
