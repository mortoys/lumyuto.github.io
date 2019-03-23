
# 安装 Huginn

中间遇到了一个问题

[见此](https://stackoverflow.com/questions/50909928/installing-mysql-2-gem-fails)

需要将 Gemfile 中的 

```ruby
gem 'mysql2', ">= 0.3.18", "< 0.5"
```

改为

```ruby
gem 'mysql2', '~> 0.4.10'
```

安装好了之后: [owlu.herokuapp.com](owlu.herokuapp.com)

