from turtle import st
import serial
import time

arduino = serial.Serial('COM3', 9600, timeout=10000);


#while(1):
 #   arduino.write(b'a')
  #  time.sleep(1)
   # arduino.write(b'c')
    #time.sleep(1)
while (1):
    while (arduino.in_waiting == 0):
        pass
    data= str(arduino.readline()).rstrip()

    print(data)


arduino.close()