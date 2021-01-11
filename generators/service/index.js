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
      },
      {
        type: "confirm",
        name: "base",
        message: "Is this model extends BaseModel?",
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const className =
      this.props.modelName[0].toUpperCase() + this.props.modelName.substring(1);
    this.fs.copyTpl(
      this.templatePath("model.ejs"),
      this.destinationPath(`./generated/${this.props.modelName}.ts`),
      { className: className, ...this.props }
    );
  }

  end() {
    this.log(
      `${chalk.green("Generated Service successfully!!! Good Luck!!!")} `
    );
  }
};
