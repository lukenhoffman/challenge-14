-- Use your database
USE your_database_name;

-- Insert sample data into 'users' table
INSERT INTO users (username, password)
VALUES 
('user1', 'hashed_password_1'),
('user2', 'hashed_password_2'),
('user3', 'hashed_password_3');

-- Insert sample data into 'posts' table
INSERT INTO posts (title, content, user_id, created_at)
VALUES 
('Post Title 1', 'This is the content of post 1.', 1, NOW()),
('Post Title 2', 'This is the content of post 2.', 2, NOW()),
('Post Title 3', 'This is the content of post 3.', 3, NOW());

-- Insert sample data into 'comments' table
INSERT INTO comments (content, user_id, post_id, created_at)
VALUES 
('This is comment 1 on post 1.', 2, 1, NOW()),
('This is comment 2 on post 1.', 3, 1, NOW()),
('This is comment 1 on post 2.', 1, 2, NOW());
