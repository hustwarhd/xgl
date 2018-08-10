#version 450 core


layout(location = 0) in vec4 a0;
layout(location = 10) in vec4 b0;
layout(location = 0) out vec4 color;

void main()
{
    color = vec4(distance(a0.x,b0.y) + distance(double(a0.x) , double(b0.y)));
}