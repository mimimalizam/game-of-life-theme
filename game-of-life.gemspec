# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "game-of-life"
  spec.version       = "0.1.0"
  spec.authors       = ["Milana"]
  spec.email         = ["milana.stojadinov@gmail.com"]

  spec.summary       = %q{Jekyll and p5.js theme on famous Game of life}
  spec.homepage      = "https://github.com/mimimalizam/game-of-life"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.4"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
