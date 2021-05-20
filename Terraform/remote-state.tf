# Using a single workspace:
terraform {
  backend "remote" {
    hostname = "app.terraform.io"
    organization = "tiagobmarqueslabs"

    workspaces {
      name = "aws-tiagobmarqueslabs"
    }
  }
}