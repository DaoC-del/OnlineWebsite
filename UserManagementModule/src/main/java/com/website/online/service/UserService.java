package com.website.online.service;

import com.website.online.entity.User;
import com.website.online.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

@Service
public class UserService extends ServiceImpl<UserMapper, User> {
    @Autowired
    private UserMapper userMapper;

    // 在服务类中可以使用 MyBatis-Plus 提供的方法进行数据库操作
}
