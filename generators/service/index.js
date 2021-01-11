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
      this.props = props;
    });
  }

  writing() {
    const className =
      this.props.modelName[0].toUpperCase() + this.props.modelName.substring(1);
    this.log(className);
    this.fs.copyTpl(
      this.templatePath("service.ejs"),
      this.destinationPath(`${this.props.modelName}.service.ts`),
      { className: className, ...this.props }
    );
    this.log("完成");
  }

  end() {
    this.log(
      `${chalk.green("Generated Service successfully!!! Good Luck!!!")} `
    );
  }
};
