import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class Cizgileri_Birlestir extends PApplet {

float x, y;
int tikSayisi;
public void setup ()
{
  
}
public void draw ()
{
  if (mousePressed)
  {    
    if (tikSayisi==0)
    {
      x=mouseX;
      y=mouseY;
      point(mouseX, mouseY);
      tikSayisi++;
    }
    else
    {
      line (x, y, pmouseX, pmouseY);
      x=pmouseX;
      y=pmouseY;
    }
  }
    if (keyCode==UP)
      strokeWeight(5);
    else if (keyCode==DOWN)
      strokeWeight(0.5f);
}
  public void settings() {  size (600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Cizgileri_Birlestir" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
