# game-of-life

Welcome to your new Jekyll theme! In this directory, you'll find the files you
need to be able to package up your theme into a gem. Put your layouts in
`_layouts`, your includes in `_includes` and your sass in `_sass`.

To experiment with this code, add some sample content and run `bundle exec jekyll
serve` – this directory is setup just like a Jekyll site!
Also, you can adjust this command
`bundle exec jekyll --host <host-name> --port <port>` to suit your needs.
Site will be available at `<host-name>:<port>` in your browser.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby gem "game-of-life" ```

And add this line to your Jekyll site's `_config.yml`:

```yaml theme: game-of-life ```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install game-of-life

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/[USERNAME]/hello. This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to
the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run
`bundle exec jekyll serve` and open your browser at `http://localhost:4000`.
This starts a Jekyll server using your theme. Add pages, documents, data, etc.
like normal to test your theme's contents. As you make modifications to your
theme and to your content, your site will regenerate and you should see the
changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and
`_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT
License](https://opensource.org/licenses/MIT).

## Steps

- Ruby Gems account
- suppose that Ruby, Bundler and Jekyll are in place
- `jekyll new-theme <theme-name>`
- update `.gemspec` file

## Theme

### Usage

Lines similar to the following will plot a Game of life strip

```js
board = new Board(columns, rows);
board.fill(starting_column, ending_column, starting_row, ending_row);
```

### Functionality

Press ESCAPE key to hide Game of life. It can be restored with a mouse click.
Other key strokes reset the board.
