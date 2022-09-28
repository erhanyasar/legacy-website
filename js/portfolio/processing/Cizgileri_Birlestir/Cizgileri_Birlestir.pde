float x, y;
int tikSayisi;
void setup ()
{
  size (600, 600);
}
void draw ()
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
      strokeWeight(0.5);
}