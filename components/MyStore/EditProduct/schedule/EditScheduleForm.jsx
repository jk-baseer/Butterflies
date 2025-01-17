/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  convertTimeinto212Hrs,
  convertTimeinto24Hrs,
  findRepeatId,
  repeatArray,
  weekDays,
} from '../../../Shared/Constant/Constant';
import OutsideClickHandler from 'react-outside-click-handler';
import PopUp from '../../../Shared/PopUp/PopUp';

const ScheduleForm = ({
  setSchedulesObject,
  schedulesObject,
  changeSelectedSchedule,
  editScheduleData,
  editScheduleLoading,
}) => {
  const [repeatValue, setRepeatValue] = useState(null);
  const [showCustomRepeatValue, setShowCustomRepeatValue] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error_message, setError_message] = useState('');

  const repeatValues = repeatArray;

  const repeatValueSelect = (value) => {
    if (value !== 'custom') {
      setShowCustomRepeatValue(false);
      const makeArray = value.split(',').map((item) => Number(item));
      setRepeatValue(makeArray);
      setSchedulesObject({
        ...schedulesObject,
        repeat_days: makeArray,
      });
    } else {
      setRepeatValue(null);
      setShowCustomRepeatValue(true);
    }
  };

  useEffect(() => {
    setSchedulesObject({
      start_date: editScheduleData.start_date,
      start_time: editScheduleData.start_time,
      end_time: editScheduleData.end_time,
      schedule_type: 2,
      repeat_days: editScheduleData.repeat_days,
      active: true,
    });
    setRepeatValue(editScheduleData.repeat_days);

    if (findRepeatId(schedulesObject?.repeat_days).id === "custom") {
      setShowCustomRepeatValue(true);
    }

  }, [editScheduleData]);
  console.log('====================================');
  console.log(schedulesObject);
  console.log('====================================');

  const saveTime = () => {
    let srttime = Date.parse(`1/1/1999 ${schedulesObject.start_time}`);
    let edTime = Date.parse(`1/1/1999 ${schedulesObject.end_time}`);
    if (schedulesObject.start_date === null) {
      setShowError(true);
      setError_message('Select a date');
      return false;
    }
    if (schedulesObject.start_time === null) {
      setShowError(true);
      setError_message('Select start time');
      return false;
    }
    if (schedulesObject.end_time === null) {
      setShowError(true);
      setError_message('Select end time');
      return false;
    }
    if (schedulesObject.repeat_days === null) {
      setShowError(true);
      setError_message('Select a repeat option');
      return false;
    }
    if (schedulesObject.repeat_days === null) {
      setShowError(true);
      setError_message('Select a repeat option');
      return false;
    }
    // if (edTime > srttime) {
    //     setShowError(true);
    //     setError_message('End time must be greater then start time');
    //     return false;
    // }
    changeSelectedSchedule();
  };

  const closePopUP = () => {
    setShowError(false);
    setError_message('');
  };

  return (
    <div className="w-full bg-white rounded p-6  ">
      {showError && (
        <OutsideClickHandler
          onOutsideClick={() => {
            showError && (setShowError(false), setError_message(''));
          }}
        >
          <div className="fixed z-50 top-0 left-0  w-screen mt-5 ">
            <div className="w-full  xs:w-[500px] mx-auto">
              <PopUp message={error_message} closePopUP={closePopUP} />
            </div>
          </div>
        </OutsideClickHandler>
      )}
      <h3 className=" font-semibold text-primary text-xl mb-4">
        Edit Schedule
      </h3>
      <div className="grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-gray-700">Start Date</span>
          <input
            value={schedulesObject.start_date}
            type="date"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                 border-0 border-b-2 border-gray-200 transition  duration-700
                    focus:ring-0 focus:border-primary
                  "
            onChange={(e) =>
              setSchedulesObject({
                ...schedulesObject,
                start_date: e.target.value,
              })
            }
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Start time</span>
          <input
            value={schedulesObject.start_time}
            type="time"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                 border-0 border-b-2 border-gray-200 transition  duration-700
                    focus:ring-0 focus:border-primary
                  "
            onChange={(e) =>
              setSchedulesObject({
                ...schedulesObject,
                start_time: convertTimeinto24Hrs(e.target.value),
              })
            }
          />
        </label>
        <label className="block">
          <span className="text-gray-700">End time</span>
          <input
            value={schedulesObject.end_time}
            type="time"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                 border-0 border-b-2 border-gray-200 transition  duration-700
                    focus:ring-0 focus:border-primary
                  "
            onChange={(e) =>
              setSchedulesObject({
                ...schedulesObject,
                end_time: convertTimeinto24Hrs(e.target.value),
              })
            }
          />
        </label>
        <label className="block relative">
          <span className="text-gray-700">Repeat</span>

          <select
            className="
                   mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200 transition  duration-700
                    focus:ring-0 focus:border-primary
                  
                  "
            onChange={(e) => repeatValueSelect(e.target.value)}
          >
            <option disabled selected hidden>
              Select a value
            </option>
            {repeatValues?.map((item, index) => (
              <option
                key={item.id}
                value={item.id}
                selected={
                  item.id ===
                  findRepeatId(schedulesObject?.repeat_days).id
                    ? true
                    : false
                }
                // onClick={() => repeatValueSelect(index)}
              >
                {item.name}
              </option>
            ))}
          </select>
        </label>
        {showCustomRepeatValue && (
          <div>
            {weekDays.map((day) => (
              <button
                key={day.id}
                className={[
                  'py-1 px-3 border border-primary rounded m-2 text-primary',
                  repeatValue?.includes(day.id)
                    ? ' transition duration-700 bg-primary text-white ring ring-offset-1 ring-primary  '
                    : '',
                ].join(' ')}
                onClick={() => {
                  if (repeatValue === null) {
                    setRepeatValue([day.id]);
                    setSchedulesObject({
                      ...schedulesObject,
                      repeat_days: [day.id],
                    });
                  } else {
                    if (repeatValue.includes(day.id)) {
                      const filter = repeatValue.filter(
                        (item) => item !== day.id
                      );
                      setRepeatValue(filter);
                      setSchedulesObject({
                        ...schedulesObject,
                        repeat_days: filter,
                      });
                    } else {
                      setRepeatValue([...repeatValue, day.id]);
                      setSchedulesObject({
                        ...schedulesObject,
                        repeat_days: [...repeatValue, day.id],
                      });
                    }
                  }
                }}
              >
                {day.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className=" flex justify-center mt-7">
        <button
          className="w-5/6  h-9 flex justify-center items-center bg-primary text-center text-white rounded-lg "
          onClick={() => saveTime()}
        >
          {editScheduleLoading && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          Save
        </button>
      </div>
    </div>
  );
};

export default ScheduleForm;
