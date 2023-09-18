# 使用官方MySQL镜像作为基础镜像
FROM mysql:latest

# 设置MySQL的root密码（请替换为你自己的密码）
ENV MYSQL_ROOT_PASSWORD=mysecretpassword

# 创建一个新的数据库（可选）
ENV MYSQL_DATABASE=mydatabase

# 可以添加其他自定义配置，如字符集、时区等
# ENV MYSQL_CHARSET=utf8mb4
# ENV MYSQL_COLLATION=utf8mb4_unicode_ci

# 暴露MySQL的默认端口（3306）
EXPOSE 3306

# 可以将数据库初始化脚本复制到容器中，以初始化数据库（可选）
# COPY ./init.sql /docker-entrypoint-initdb.d/

# 执行MySQL容器的启动命令
CMD ["mysqld"]
