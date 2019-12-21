source "https://rubygems.org"

# If you want to use GitHub Pages, remove the "gem "jekyll"" below and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
gem "jekyll", "~> 3.6.3"
gem "jekyll-theme-hyde", "~> 2.0"

# Jekyll Plugins Group
# group :jekyll_plugins do
#   gem "jekyll-paginate"
# end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
