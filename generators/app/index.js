"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the splendid ${chalk.blue("generator-nest")} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "modelName",
        message: "Enter your model name",
        default: "model"
      }
    ];

    return this.prompt(prompts).then(props => {
      console.log(props);
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath("dummyfile.js"),
      this.destinationPath("./generated/dummyfile.js")
    );
    this.fs.copy(
      this.templatePath("test.txt"),
      this.destinationPath("./generated/test.txt")
    );
  }

  end() {
    this.log(`${chalk.green("Generated successfully!!! Good Luck!!!")} `);
  }
};
