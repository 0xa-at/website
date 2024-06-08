{pkgs, ...}: {
  packages = with pkgs; [
    nodePackages.serve
  ];

  languages.javascript = {
    enable = true;
    yarn.enable = true;
  };
}
