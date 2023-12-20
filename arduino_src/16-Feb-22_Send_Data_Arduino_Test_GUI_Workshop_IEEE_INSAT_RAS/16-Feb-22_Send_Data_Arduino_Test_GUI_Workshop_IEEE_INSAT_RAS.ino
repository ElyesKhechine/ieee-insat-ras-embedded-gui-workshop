
void setup() {
  // put your setup code here, to run once:
  pinMode(13,OUTPUT);
  Serial.begin(9600);
  delay(1000);
}

void loop() {
  // put your main code here, to run repeatedly:
  char c = Serial.read();
  if (c=='a')
      digitalWrite(13,HIGH);
  if (c=='c')
      digitalWrite(13,LOW);
}
