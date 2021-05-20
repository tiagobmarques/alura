variable "amis" {
  type = "map"

  default = {
    "us-east-1" = "ami-07d0cf3af28718ef8"
    "us-east-2" = "ami-00c03f7f7f2ec15c3"
  }
}

variable "cdirs_acesso_remoto" {
  type = "list"
  default = ["159.220.58.3/32"]
}

variable "key_name" {
  default = "terraform-aws"
}
