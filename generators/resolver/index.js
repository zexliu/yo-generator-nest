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
      },
      {
        type: "confirm",
        name: "pagination",
        message: "Is this model has pagination?",
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
    var pluralize = require("pluralize");
    const pluralName = pluralize(this.props.modelName, 2);
    this.fs.copyTpl(
      this.templatePath("dto.ejs"),
      this.destinationPath(`${this.props.modelName}.dto.ts`),
      { className: className }
    );
    this.fs.copyTpl(
      this.templatePath("resolver.ejs"),
      this.destinationPath(`${this.props.modelName}.resolver.ts`),
      { className: className, pluralName: pluralName, ...this.props }
    );
  }

  end() {
    this.log(`${chalk.green("Generated Model successfully!!! Good Luck!!!")} `);
  }
};
